import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: string | ReactElement<any, string>;
    activeClassName: string;
}

export function ActiveLink({
    children,
    activeClassName,
    ...props
}: ActiveLinkProps) {
    const { asPath } = useRouter();

    const className = asPath === props.href ? activeClassName : undefined;

    return (
        <Link className={className} {...props}>
            {children}
        </Link>
    );
}
