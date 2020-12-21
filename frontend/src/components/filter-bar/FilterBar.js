import React from "react";
import { Checkbox, Col, Input, Row } from "antd";
import "./FilterBar.css";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../store/actions/filter";
import { filterReminders } from "../../store/actions/reminders";

const FilterBar = (props) => {
  const { show, searchText } = props.filter;
  const dispatch = useDispatch();

  const options = ["All", "Active", "Done"];
  let filter = {
    show: ["Active"],
    searchText,
  };

  const handleShowChange = (e) => {
    const isChecked = e.length > show.length;
    let current = "";
    if (isChecked) {
      current = e.filter((selected) => !show.includes(selected))[0];
    } else {
      current = show.filter((selected) => !e.includes(selected))[0];
    }

    if (current === "All" && isChecked) {
      filter.show = [...options];
    } else if (current === "All" && !isChecked) {
      filter.show = [];
    } else if (e.length === 2) {
      if (isChecked) {
        filter.show = [...e, "All"];
      } else {
        filter.show = [...e.filter((selected) => selected !== "All")];
      }
    } else {
      filter.show = e;
    }

    dispatch(updateFilter(filter));
    dispatch(filterReminders(filter));
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    dispatch(
      updateFilter({
        show,
        searchText,
      })
    );
    dispatch(
      filterReminders({
        show,
        searchText,
      })
    );
  };

  return (
    <Row className="filter">
      <Col span={8}>
        <Input size="large" placeholder="Search..." onChange={handleSearch} />
      </Col>
      <Col span={10}>
        <Checkbox.Group
          options={options}
          value={show}
          onChange={handleShowChange}
        />
      </Col>
    </Row>
  );
};

export default FilterBar;
