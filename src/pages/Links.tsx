import Card from "../components/Card";
import { externalLinks } from "../data/externalLinks";

export default function Links() {
    return (
        <div>
            <h1 className="section-title text-3xl">Links</h1>

            <ul className="list-none p-0">
                {externalLinks.map(item => (
                    <li key={item.url}>
                        <Card
                            link={item.url}
                            external
                            cover={item.cover}
                            contain
                            title={item.label}
                            excerpt={item.excerpt}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
