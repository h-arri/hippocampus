import React, { useState, useEffect } from "react";
import { Input, Checkbox, Select, Row, Col, Space } from "antd";

const FilterTab = () => {
    const options = ["All", "Active", "Done", "Deleted"];
    const handleShowChange = (e) => {
        setShow(e);
    };
    const [show, setShow] = useState(["All"]);
    return (
        <Row>
            <Col span={8}>
                <Input size="large" placeholder="Search..." />
            </Col>
            <Col span={8}>
                <Checkbox.Group options={options} defaultValue={["All"]} onChange={handleShowChange} />
            </Col>
            <Col span={4}>
                <Select mode="multiple" placeholder="Who?" defaultValue={["You (Hari)"]}>
                    <Select.Option key="you">You (Hari)</Select.Option>
                    <Select.Option key="you">Fabi</Select.Option>
                    <Select.Option key="you">Marko</Select.Option>
                </Select>
            </Col>
        </Row>
    );
};

export default FilterTab;