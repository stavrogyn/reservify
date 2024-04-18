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
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </legend>
    );
});

FormHeader.displayName = "FormHeader";