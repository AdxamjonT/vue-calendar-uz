import DatePicker from 'vue2-datepicker';
import uz from 'date-format-parse/lib/locale/uz';

var lang = {
    formatLocale: uz,
    yearFormat: 'YYYY',
    monthFormat: 'MMM',
    monthBeforeYear: true
};
DatePicker.locale('uz', lang);

export default lang;
