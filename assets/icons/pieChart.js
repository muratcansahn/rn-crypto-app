const PieChart = ({ color }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.29999 12C3.29999 6.69806 7.59805 2.39999 12.9 2.39999V12H22.5C22.5 17.3019 18.2019 21.6 12.9 21.6C7.59805 21.6 3.29999 17.3019 3.29999 12Z"
                fill={color}
            />
            <path d="M15.3 2.70234C18.6735 3.57062 21.3294 6.22652 22.1976 9.60005H15.3V2.70234Z" fill={color} />
        </svg>
    );
};

export default PieChart;
