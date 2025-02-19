import {ButtonType} from "@/app/components/Button/button.type";


const BasicButton = ({onClick, children, className}: ButtonType) => {
    return (
        <button className={`rounded-xl bg-blue-100 p-2 hover:bg-blue-300 active:bg-blue-300 ${className}`}
                onClick={onClick}>
            {children}
        </button>
    );
};

export default BasicButton;
