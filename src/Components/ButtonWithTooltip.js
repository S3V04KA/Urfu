import { useRef, useState } from "react"
import { createPortal } from "react-dom";

export default function ButtonWithTooltip({children, tooltipContent, ...rest}) {
    const [target, setTarget] = useState(null);
    const buttonRef = useRef(null);
    return (
        <>
            <button {...rest} ref={buttonRef} onPointerEnter={() => {
                const rect = buttonRef.current.getBoundingClientRect();
                setTarget({
                    left: rect.left,
                    top: rect.top,
                    right: rect.right,
                    bottom: rect.bottom
                });
            }}
            onPointerLeave={() => {
                setTarget(null);
            }}>{children}</button>
            {target !== null && (
                createPortal(<p style={{position: 'absolute', pointerEvents: 'none', left: target.left, top: target.top, color: 'white'}}>{tooltipContent}</p>, document.body)
            )}
        </>
    )
}