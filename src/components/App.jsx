import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Wrap } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const optionsKey = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    return (
      <Wrap>
        <Section title={`Please leave feedback`}>
          <FeedbackOptions
            options={optionsKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={`Statistics`}>
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={`There is no feedback`} />
          )}
        </Section>
      </Wrap>
    );
  }
}
