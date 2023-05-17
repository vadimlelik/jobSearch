import React, { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import Button from "../Button";
import { Select, NumberInput } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading, getVacancies } from "../../store/catalogues";
import { searchJobsList } from "../../store/jobs";
import { ReactComponent as ArrowIcon } from "./icon/arrow.svg";
import { ReactComponent as ArrowBtnIcon } from "./icon/arrow_btn.svg";
import styles from "./GroupList.module.css";

const GroupFilter = ({ search, onReset }) => {
    const dispatch = useDispatch();
    const vacancies = useSelector(getVacancies());
    const isLoading = useSelector(getIsLoading());
    const error = useSelector(getError());
    const [vacanciesList, setVacanciesList] = useState([]);

    const [value, setValue] = useState("");
    const [paymentTo, setPaymentTo] = useState();
    const [paymentFrom, setPaymentFrom] = useState();

    useEffect(() => {
        if (!isLoading) {
            setVacanciesList(
                vacancies.map((vac) => {
                    return { value: vac.key, label: vac.title_trimmed };
                })
            );
        }
    }, [isLoading]);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(
            searchJobsList({
                paymentFrom,
                paymentTo,
                catalogues: value,
                published: 1,
                keyword: search,
            })
        );
    };
    const handleReset = () => {
        setValue("");
        setPaymentTo(0);
        setPaymentFrom(0);
        onReset("");
    };

    if (!isLoading) {
        return (
            <div className={styles.FormWrapper}>
                <form onSubmit={handleSearch}>
                    <h3 className={styles.FormTitle}>Фильтры</h3>

                    <Button theme="link" onClick={handleReset}>
                        Cбросить все x
                    </Button>
                    <Select
                        placeholder="Выберете отрасль "
                        data={vacanciesList}
                        value={value}
                        onChange={setValue}
                        rightSection={<ArrowIcon size="1rem" />}
                        className={styles.Select}
                        label="Отрасль"
                    />
                    <NumberInput
                        placeholder="От"
                        value={paymentFrom}
                        onChange={setPaymentFrom}
                        label="Оклад"
                        className={styles.NumberInput}
                        hideControls
                        rightSection={<ArrowBtnIcon size="1rem" />}
                    />
                    <NumberInput
                        placeholder="До"
                        value={paymentTo}
                        onChange={setPaymentTo}
                        hideControls
                        rightSection={<ArrowBtnIcon size="1rem" />}
                    />

                    <Button className={styles.BtnForm} size="M" type="submit">
                        Применить
                    </Button>
                </form>
            </div>
        );
    } else {
        return <Loader color="gray" size="xl" className={styles.Loader} />;
    }
};

export default GroupFilter;
