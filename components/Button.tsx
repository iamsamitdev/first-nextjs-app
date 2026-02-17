export default function Button({
    children, onClick, style, disabled
}: Readonly<{
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;
}>) {
  return (
    <div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {children}
        </button>
    </div>
  )
}