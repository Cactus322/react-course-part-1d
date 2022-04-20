import StatisticLine from './StatisticLine';

const Statistics = ({value}) => {
    let feedback = false;

    value.forEach((e, i) => {
        if (e.count > 0) {
            feedback = true;
        }
    })

    const feedbackValue = value.map( (e, i) => <StatisticLine key={i} statistic={value[i]}> </StatisticLine>);
    const noFeedback = <tr><td>No feedback given</td></tr>;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Statistics</td>
                    </tr>
                </thead>
                <tbody>
                    { feedback ? feedbackValue : noFeedback }
                </tbody>
            </table>
        </div>
    )
}

export default Statistics;