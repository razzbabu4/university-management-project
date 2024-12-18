import {
  TAcademicSemesterNameCodeMapper,
  TMonths,
  TSemesterCodes,
  TSemesterNames,
} from './academicSemester.interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SemesterNames: TSemesterNames[] = ['Autumn', 'Summer', 'Fall'];
const SemesterCodes: TSemesterCodes[] = ['01', '02', '03'];

export const AcademicSemesterConstant = {
  Months,
  SemesterNames,
  SemesterCodes,
};

// business need: semester code === semester name
export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
