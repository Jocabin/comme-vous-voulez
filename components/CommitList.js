import DateLabel from "@/components/DateLabel"
import Link from "next/link"

export default function CommitList({ data }) {
        return (
                <ul>
                        {data.map(el => (
                                <li key={el.sha}>
                                        <Link href={el.html_url} target="_blank" rel="noreferrer">
                                                <span>{el.sha}&nbsp;|&nbsp;</span>
                                                <span>{el.commit.author.name}&nbsp;|&nbsp;</span>
                                                <span><DateLabel date={el.commit.author.date} />&nbsp;|&nbsp;</span>
                                                <span>{el.commit.message}</span>
                                        </Link>
                                </li>
                        ))}
                </ul>
        )
} 