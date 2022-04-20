import Feedback from './components/Feedback'
import Statistics from './components/Statistics'
import {useState} from "react";

function App() {
    const feedbackValue = [
        'good',
        'neutral',
        'bad'
    ];

    const [good, setGood] = useState( { count: 0, name: 'good' });
    const [neutral, setNeutral] = useState({ count: 0, name: 'neutral' });
    const [bad, setBad] = useState({ count: 0, name: 'bad' });
    const [all, setAll] = useState({ count: 0, name: 'all' });
    const [average, setAverage] = useState({ count: 0, name: 'average' });
    const [positive, setPositive] = useState({ count: 0, name: 'positive' });

    return (
    <>
      <Feedback feedback={feedbackValue}
                good={[good, setGood]}
                neutral={[neutral, setNeutral]}
                bad={[bad, setBad]}
                all={[all, setAll]}
                average={[average, setAverage]}
                positive={[positive, setPositive]}
      />
      <Statistics value={[good, neutral, bad, all, average, positive]} />
    </>
  );
}

export default App;
