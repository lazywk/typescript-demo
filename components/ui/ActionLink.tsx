import Link from "next/link";

type PropTypes = {
    children: string;
    path: string;
    className?: string;
}

export default function ActionLink({ path, children, className }: PropTypes) {
    return (
        <Link href={path} className={`text-[blue] underline ${className}`}>
            {children}
        </Link>
    )
}
