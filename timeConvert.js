const timeConvert = {
	format: function(x) {
		if (x.match(/s(ec(ond)?)?s?/gi) != null) {
			return ("second");
		} else if (x.match(/m(in(ute)?)?s?/gi) != null) {
			return ("minute");
		} else if (x.match(/h(our)?s?/gi) != null) {
			return ("hour");
		} else if (x.match(/d(ay)?s?/gi) != null) {
			return ("day");
		} else if (x.match(/w(eek)?s?/gi) != null) {
			return ("week");
		} else if (x.match(/mo(nth)?s?/gi) != null) {
			return ("month");
		}
	},
  
	conversions: {
		second: {
			second: 1,
			minute: 60,
			hour: 3600,
			day: 86400,
			week: 6.048e+5,
			month: 2.592e+6
		},
		minute: {
			second: (1 / 60),
			minute: 1,
			hour: 60,
			day: 1440,
			week: 10080,
			month: 43200
		},
		hour: {
			second: (1 / 3600),
			minute: (1 / 60),
			hour: 1,
			day: 24,
			week: 168,
			month: 720
		},
		day: {
			second: (1 / 86400),
			minute: (1 / 1440),
			hour: 24,
			week: 7,
			month: 30
		},
		week: {
			second: 6.048e+5,
			minute: 10080,
			hour: 168,
			day: 7,
			week: 1,
			month: (30 / 7)
		},
		month: {
			second: 2.592e+6,
			minute: 43200,
			hour: 720,
			day: 30,
			week: (30 / 7),
			month: 1
		}
	},
  
	convert: function(amount, from, to) {
		from = this.format(from);
		to = this.format(to);
		return (amount / (this.conversions[from][to]));
	},
  
	valueFormat: function(amount, type) {
		type = this.format(type);
		if (amount > 1 || (amount > 0 && amount < 1)) {
			type += "s"
		}
		return (`${amount} ${type}`);
	},
  
	convertString: function(amount, from, to) {
		return (
			`${this.valueFormat(amount,from)} = ${this.valueFormat(this.convert(amount,from,to),to)}`);
	}
}