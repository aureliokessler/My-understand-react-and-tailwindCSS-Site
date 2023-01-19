export function Badge( { text = "", bgColorClass = "" } ) {
    // bg-cyan-600
    return (
        <div className={'inline rounded-md px-4 py-1 text-xs font-semibold text-white ' + bgColorClass }>{text.toUpperCase()}</div>
    );
}