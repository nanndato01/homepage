import { externalLinks } from "../data/externalLinks";

export default function Footer() {
    return (
        <div className="bg-gray-50 border-t border-gray-400 text-gray-500 items-center py-[30px] mt-[30px]">
            <div className="text-center mb-[10px]">
                <p>© 2025 nanndato01</p>
            </div>

            <ul className="p-0 m-0 list-none flex justify-center">
                {externalLinks.map(item => (
                    <li key={item.url} className="mx-4 border-b border-black">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}