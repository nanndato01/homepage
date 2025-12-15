import xlogo from "../assets/logo/x-logo/logo-black.png";
import ylogo from "../assets/logo/youtube_mini_icon.png";
import nlogo from "../assets/logo/note_logo.webp";
import glogo from "../assets/logo/github-mark/github-mark.png";

export interface ExternalLink {
    cover: string;
    label: string;
    url: string;
    excerpt: string;
}

export const externalLinks: ExternalLink[] = [
    {
        cover: xlogo,
        label: "X(旧Twitter)",
        url: "https://x.com/nanndato01",
        excerpt: "寝る起きたbot"
    },
    {
        cover: ylogo,
        label: "Youtube",
        url: "https://youtube.com/@nanndato01",
        excerpt: "低頻度"
    },
    {
        cover: nlogo,
        label: "note",
        url: "https://note.com/nanndato01",
        excerpt: "ほぼ日記"
    },
    {
        cover: glogo,
        label: "github",
        url: "https://github.com/nanndato01",
        excerpt: "成果物はここに置くことが多い"
    }
]