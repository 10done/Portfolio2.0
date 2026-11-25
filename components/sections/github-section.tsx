"use client";

import { useState, useEffect, useCallback } from "react";
import { githubConfig } from "@/data/github";

import { ActivityCalendar } from "react-activity-calendar";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

export default function GitHubSection() {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchContributions = useCallback(async () => {
        try {
            // Rolling last 12 months; this API already returns { date, count, level }
            const res = await fetch(`${githubConfig.apiUrl}/${githubConfig.username}?y=last`);
            if (!res.ok) throw new Error("Failed to fetch");

            const data: { contributions: ContributionDay[] } = await res.json();
            const filtered = data.contributions;

            setContributions(filtered);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContributions();
    }, [fetchContributions]);

    return (
        <div className="field-guide field-details">
            <section className="detail-section" aria-labelledby="github-heading">
                <div className="detail-heading"><p className="field-kicker">08 / Activity</p><h2 id="github-heading">On <em>GitHub.</em></h2><p>Contributions over the last year.</p><a className="detail-link" href={`https://github.com/${githubConfig.username}`} target="_blank" rel="noopener noreferrer">View GitHub profile ↗</a></div>
                <div className="github-calendar">
                    {loading ? <p>Loading contributions…</p> : error ? <p>Unable to load contributions.</p> : contributions.length === 0 ? <p>No contribution data available.</p> : (
                        <ActivityCalendar data={contributions} blockSize={githubConfig.blockSize} blockMargin={githubConfig.blockMargin} fontSize={githubConfig.fontSize} maxLevel={githubConfig.maxLevel as 1 | 2 | 3 | 4} colorScheme="dark" theme={{dark: ["#3b4140", "#536d51", "#73936c", "#93ad82", "#bed0ad"]}} labels={{totalCount: "{{count}} contributions in the last year"}} />
                    )}
                </div>
            </section>
        </div>
    );
}
