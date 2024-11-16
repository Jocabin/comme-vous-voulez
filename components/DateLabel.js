
import { useFormatter } from 'next-intl';

export default function DateLabel({ date }) {
        const format = useFormatter()
        const date_time = new Date(date)
        const now = new Date()

        return (
                <>{format.relativeTime(date_time, now)}</>
        )
}