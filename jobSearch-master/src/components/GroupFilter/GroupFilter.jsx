import React from "react";
import Button from "../Button";
import SelectField from "../Form/SelectField";
import { useSelector } from "react-redux";
import { getError, getIsLoading, getVacancies } from "../../store/catalogues";
import Field from "../Form/Field";
import styles from "./GroupList.module.css";

const GroupFilter = ({ data, handleChange, onSubmit, onReset }) => {
    const vacancies = useSelector(getVacancies());
    const isLoading = useSelector(getIsLoading());
    const error = useSelector(getError());

    if (!isLoading) {
        return (
            <div className={styles.FormWrapper}>
                <form onSubmit={onSubmit}>
                    <h3 className={styles.FormTitle}>Фильтры</h3>
                    <Button onClick={onReset} theme="link">
                        Cбросить все x
                    </Button>

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
                    <Button className={styles.BtnForm} size="L" type="submit">
                        Применить
                    </Button>
                </form>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

export default GroupFilter;
