import { Link } from 'react-router-dom'
import './pagination.css'
import { useState } from 'react'

export function Pagination(args: {
    serchResult: { results: []; count: number; next: string }
}) {
    const [selectBtn, setSelectBtn] = useState(1)
    const resPagination = []
    console.log(args.serchResult.next)
    if (args.serchResult.count > 9) {
        for (let i = 0; i < args.serchResult.count / 10; i++) {
            if (selectBtn === i + 1) {
                resPagination.push(
                    <Link
                        to={`/react/page=${i + 1}`}
                        className="pagination_element  selected_element"
                        key={`pagination${i + 1}`}
                        onClick={() => setSelectBtn(i + 1)}
                    >
                        {i + 1}
                    </Link>
                )
            } else {
                resPagination.push(
                    <Link
                        to={`/react/page=${i + 1}`}
                        className="pagination_element"
                        key={`pagination${i + 1}`}
                        onClick={() => setSelectBtn(i + 1)}
                    >
                        {i + 1}
                    </Link>
                )
            }
        }
    }

    return <div className="pagination_wraper">{resPagination}</div>
}
