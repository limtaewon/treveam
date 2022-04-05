import axios from "axios";
import { useEffect, useState } from "react";
import { Select } from "antd";

function Selectbox() {
  const [farea, setFarea] = useState([]);
  const [sarea, setSarea] = useState([]);
  const { Option } = Select;

  useEffect(async () => {
    await axios.get("http://localhost:8080/area/get/list").then((res) => {
      setFarea(res);
    });
  }, []);

  const handleFirstChange = async (e) => {
    await axios.get(`http://localhost:8080/sarea/get/${e}`).then((res) => {
      setSarea(res);
    });
  };

  const handelSecondChange = () => {
    return;
  };
  return (
    <>
      <Select
        defaultValue={farea.data && farea.data[0].name}
        style={{ width: 200 }}
        onChange={handleFirstChange}
      >
        {farea.data &&
          farea.data.map((city) => <Option key={city._id}>{city.name}</Option>)}
      </Select>
      <Select style={{ width: 200 }} onChange={handelSecondChange}>
        {sarea.data &&
          sarea.data.map((city) => <Option key={city._id}>{city.name}</Option>)}
      </Select>
    </>
  );
}

export default Selectbox;
