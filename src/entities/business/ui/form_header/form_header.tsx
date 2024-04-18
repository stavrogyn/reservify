import { memo } from "react";
import cx from "classnames";

import style from "./form_header.module.css";

type FormHeaderProps = {
    title: string;
    subtitle?: string;
    className?: string;
};

export const FormHeader = memo(({
    title,
    subtitle,
    className,
}: FormHeaderProps) => {
    return (
        <legend className={cx(style.root, className)}>
            <h4 className={style.title}>{title}</h4>
            {subtitle && <p className={style.subtitle}>{subtitle}</p>}
        </legend>
    );
});

FormHeader.displayName = "FormHeader";
