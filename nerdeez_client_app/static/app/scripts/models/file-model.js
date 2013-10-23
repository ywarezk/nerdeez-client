/**
 * model for the files
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.File = Nerdeez.NerdeezModel.extend({
	title: DS.attr('string'),
	grade: DS.attr('number'),
	hw: DS.belongsTo('Nerdeez.Hw'),
	file: DS.attr('string'),
	size: DS.attr('number'),
	like: DS.attr('number'),
	dislike: DS.attr('number'),
	flag: DS.attr('boolean'),
	flag_message: DS.attr('string'),
	
	/**
	 * returns the size in a human readable form
	 */
	getSize: function(){
		var sizeMb = this.get('size') / Math.pow(2,10) / Math.pow(2,10);
		return sizeMb.toPrecision(2);
	}.property('size'),
	
	
});
