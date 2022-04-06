import axios from "axios";
import { useEffect, useState } from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { firstarea, secondarea } from "../../store/modules/dropbox";

function Selectbox() {
  const dispatch = useDispatch();
  const [farea, setFarea] = useState([]);
  const [sarea, setSarea] = useState([]);
  const { Option } = Select;
  useEffect(async () => {
    await axios.get("http://localhost:8080/area/get/list").then((res) => {
      setFarea(res);
    });
  }, []);

  const handleFirstChange = async (e) => {
    dispatch(firstarea(e));
    await axios.get(`http://localhost:8080/sarea/get/${e}`).then((res) => {
      setSarea(res);
    });
  };

  const handelSecondChange = async (e) => {
    dispatch(secondarea(e));
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
