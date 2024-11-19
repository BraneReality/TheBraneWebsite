import { useMemo } from "react";

export default function GitPreview({ className, owner, repo }: { className: string, owner: string, repo: string }) {

    const hash = useMemo(() => Math.floor(Math.random() * 10000), []);
    return <a className={className} href={`https://github.com/{owner}/{repo}`}><img src={`https://opengraph.githubassets.com/${hash}/${owner}/${repo}`} /></a>;
}
