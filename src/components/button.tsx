export default function Button(props: { label: string, href: string }) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <button className="bg-brane-green hover:bg-brane-green-700 text-white font-bold py-2 px-4 rounded mb-2">
                {props.label}
            </button>
        </a>
    )
}