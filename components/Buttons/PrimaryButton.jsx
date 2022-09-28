import React from 'react';


const PrimaryButton = React.forwardRef(({ children, className = "demoaccobtn", onClick = (e) => { } }, ref) => {
    return (
        <div ref={ref} onClick={onClick} className={className} style={{ cursor: "pointer" }}>
            {children}
        </div>
    )
});

PrimaryButton.displayName = "PrimaryButton"

export default PrimaryButton;
