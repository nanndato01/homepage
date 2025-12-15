import Card from "../components/Card";
import ylogo from "../assets/logo/youtube_mini_icon.png";
import nlogo from "../assets/logo/note_logo.webp";
import xlogo from "../assets/logo/x-logo/logo-black.png";

export default function Links() {
    return (
        <div>
            <h1 className="section-title text-3xl">Links</h1>

            <ul className="card-list list-none p-0">
                <li>
                    <Card
                        link="https://x.com/nanndato01"
                        external
                        cover={xlogo}
                        title="X(旧Twitter)"
                        excerpt="寝る起きたbot"
                    />
                </li>
                <li>
                    <Card
                        link="https://youtube.com/@nanndato01"
                        external
                        cover={ylogo}
                        title="Youtube"
                        excerpt="低頻度"
                    />
                </li>
                <li>
                    <Card
                        link="https://note.com/nanndato01"
                        external
                        cover={nlogo}
                        title="note"
                        excerpt="ほぼ日記"
                    />
                </li>
            </ul>
        </div>
    );
}
