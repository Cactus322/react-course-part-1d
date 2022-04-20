const StatisticLine = (statistic) => {
    return (
        <>
            <tr>
                <td>{statistic.statistic.name}</td>
                <td>{statistic.statistic.count}</td>
            </tr>
        </>
    )
}

export default StatisticLine;