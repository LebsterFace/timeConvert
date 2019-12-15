# timeConvert
**A super simple (and small) js library to convert amounts of time**

## Usage:
`timeConvert.convert( [ AMOUNT OF TIME ], [ WHAT TO CONVERT FROM ], [ WHAT TO CONVERT TO ])
timeConvert.convertString( [ AMOUNT OF TIME ], [ WHAT TO CONVERT FROM ], [ WHAT TO CONVERT TO ])
timeConvert.valueFormat( [ AMOUNT OF TIME ], [ INTERVAL ])`

### Examples:
    timeConvert.convert(60,"seconds","minutes") // Convert 60 seconds to minutes
    // Result: 1 (as number)
    
    timeConvert.convertString(5,"minutes","seconds") // Converts 5 minutes to seconds and format
    // Result: "5 minutes = 300 seconds"
    
### Time intervals:
This shows what strings can be used to represent intervals of time.

    Seconds:
      s
      sec(s)
      second(s)
    Minutes:
      m
      min(s)
      minute(s)
    Hours:
      h
      hour(s)
    Days:
      d
      day(s)
    Weeks:
      w
      week(s)
    Months:
      mo
      month(s)

(note: when converting to months it assumes all months are exactly 30 days, this will be changed in future)
