import React from "react";
import DrawingBoard from "react-drawing-board";

import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("home:title")}</h1>
            <DrawingBoard />
        </div>
    );
};

export default Home;
