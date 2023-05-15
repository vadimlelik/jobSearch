import React, { useState } from "react";
import Button from "../Button";
import SelectField from "../Form/SelectField";
import { useSelector } from "react-redux";
import { getError, getIsLoading, getVacancies } from "../../store/catalogues";
import Field from "../Form/Field";

const GroupFilter = ({ data, handleChange, onSubmit, onReset }) => {
    const vacancies = useSelector(getVacancies());
    const isLoading = useSelector(getIsLoading());
    const error = useSelector(getError());

    if (!isLoading) {
        return (
            <form onSubmit={onSubmit}>
                <h3>Фильтры</h3>
                <Button onClick={onReset}> Cбросить все x</Button>

                <SelectField
                    options={vacancies}
                    label="Отрасль"
                    defaultOption="Выберете отрасль"
                    onChange={handleChange}
                    value={data.catalogues}
                    name="catalogues"
                />
                <Field
                    type="number"
                    label="Оклад"
                    placeholder="От"
                    onChange={handleChange}
                    value={data.paymentFrom}
                    name="paymentFrom"
                />
                <Field
                    type="number"
                    placeholder="До"
                    onChange={handleChange}
                    value={data.paymentTo}
                    name="paymentTo"
                />
                <Button type="submit"> Применить</Button>
            </form>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

export default GroupFilter;
