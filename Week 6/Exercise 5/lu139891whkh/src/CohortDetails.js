import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { cohort } = props;

  // Set dynamic color based on cohort status
  const titleStyle = {
    color: cohort.currentStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>
        {cohort.cohortCode} - {cohort.technology}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
