import React from "react";
import Button from "../Button";
import SelectField from "../Form/SelectField";
import { useSelector } from "react-redux";
import { getError, getIsLoading, getVacancies } from "../../store/catalogues";

const GroupFilter = ({}) => {
    const data = useSelector(getVacancies());
    const isLoading = useSelector(getIsLoading());
    const error = useSelector(getError());
    console.log(data, isLoading, error);
    const searchData = () => {};

    if (!isLoading) {
        return (
            <form>
                <h3>Фильтры</h3>
                <Button> Cбросить все x</Button>

                <SelectField options={data} />
                <label>
                    Оклад
                    <input type="number" placeholder="От" />
                    <input type="number" placeholder="До" />
                </label>
            </form>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

export default GroupFilter;
