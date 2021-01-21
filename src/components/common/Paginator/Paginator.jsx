import styles from "./Paginator.module.css";
import React from "react";

export const Paginator = ({totalUsersCount, pageSize, onPagedChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(page => {
                    return (
                        <span key={page} onClick={() => {
                            onPagedChanged(page)
                        }}
                              className={currentPage === page ? styles.selectedPage : undefined}>
                                {page}
                            </span>
                    )
                })
            }
        </div>
    )
}