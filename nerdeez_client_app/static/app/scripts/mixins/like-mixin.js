/**
 * controller that has a like or dislike on a model should
 * include this mixin
 * 
 * Created October 18th, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez Ltd.
 * 
 */

/**
 This mixin allows for controllers to add like and dislike functionality on a model
 notice in the handlebar that we need to pass the model that needs to be liked/disliked

 
 Example Usage (default values):

 ''''javascript

 App.myController = Ember.Controller.extend(Nerdeez.LikeDislike,{ ... });

 ''''handlebars

 <a {{action "incLike" modelToInc}} >
	 ...
 </a>
 <a {{action "disLike" modelToInc}} >
	 ...
 </a>

 ''''

**/

/**
  @class Nerdeez.Status
  @extends Ember.Mixin
  @namespace Nerdeez
  @module Nerdeez
**/
Nerdeez.LikeDislike = Ember.Mixin.create({
	likeDislike: function(record){
		var xthis = this;
		//record.clearRelationships();
		
		record.transaction.commit();
		record.one('didUpdate', function(){
			if (xthis.get('success')){
				xthis.success('Successfully rated the file');
			}
		});
		record.one('becameError', function(){
			if (xthis.get('error')){
				xthis.error('Communication Error! Failed to rate');
			}
		})
	},
	
	actions: {
		/**
		 * when the user press the like on a resource
		 */
		incLike: function(record){
			var likes = record.get('like');
			var dislikes = record.get('dislike');
			if (likes == null || dislikes == null) return;
			record.set('like', likes + 1);
			this.likeDislike(record);		
		},
		
		/**
		 * when the user press the dislike on a resource
		 */
		incDislike: function(record){
			var likes = record.get('like');
			var dislikes = record.get('dislike');
			if (likes == null || dislikes == null) return;
			record.set('dislike', dislikes + 1);
			this.likeDislike(record);
		}
	}
});