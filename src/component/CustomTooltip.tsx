import React from "react";

interface TooltipProps {
    children: React.ReactNode;
    tooltip: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
    return (
        <div className="tooltips">
            {children}
            <span className="tooltiptext">{tooltip}</span>
        </div>
    );
};
export default Tooltip;