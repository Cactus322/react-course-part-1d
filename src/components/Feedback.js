import Button from "./Button";

const Feedback = ({good, neutral, bad, all, average, positive}) => {
    const handleClickGood = () => {
        const newValue = {
            name: good[0].name,
            count: good[0].count + 1
        }

        good[1](newValue);
        allUpdate(newValue);
    }

    const handleClickNeutral = () => {
        const newValue = {
            name: neutral[0].name,
            count: neutral[0].count + 1
        }

        neutral[1](newValue);
        allUpdate();
    }

    const handleClickBad = () => {
        const newValue = {
            name: bad[0].name,
            count: bad[0].count + 1
        }

        bad[1](newValue);
        allUpdate(newValue);
    }

    const allUpdate = (obj) => {
        const newValue = {
            name: all[0].name,
            count: all[0].count + 1
        }

        all[1](newValue);
        positiveUpdate(obj, newValue);
        averageUpdate(obj, newValue)
    }

    const averageUpdate = (obj, allReviews) => {
        let averageCount;

        if (obj) {
            if (obj.name === 'good') {
                averageCount = obj.count - bad[0].count;
            } else if (obj.name === 'bad') {
                averageCount = good[0].count - obj.count;
            }
        } else {
            averageCount = average[0].count;
        }


        const newValue = {
            name: average[0].name,
            count: (averageCount / allReviews.count).toFixed(2)
        }

        average[1](newValue);
    }

    const positiveUpdate = (review, allReviews) => {
        if (review === undefined) {
            review =  {
                name: good[0].name,
                count: good[0].count
            }
        }

        const newValue = {
            name: positive[0].name,
            count: (review.count / allReviews.count * 100).toFixed(2) + '%'
        }

        positive[1](newValue);
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => handleClickGood()} value={good[0].name} />
            <Button handleClick={() => handleClickNeutral()} value={neutral[0].name} />
            <Button handleClick={() => handleClickBad()} value={bad[0].name} />
        </div>
    )
}

export default Feedback;