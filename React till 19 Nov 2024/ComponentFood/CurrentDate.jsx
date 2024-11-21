const CurrentDate = ({Date}) => {
  return (
    <p>
      Today's date is
      <span className="bg-warning fs-1"> '{Date}' </span>
    </p>
  );
};

export default CurrentDate;
