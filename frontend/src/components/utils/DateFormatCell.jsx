
import moment from 'moment'; 
function DateFormatCell(props) {
    console.log(props);
    const dateCellFormat = moment(props).format("DD MM YYYY");
        return dateCellFormat
}
export default DateFormatCell;