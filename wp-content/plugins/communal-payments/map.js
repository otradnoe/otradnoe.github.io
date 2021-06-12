(function($) {
    $(document).ready(function(){
    
        var data = {
			 'action': 'cp_ajax_info',
             'show' : 'status'
            };
            
        jQuery.post('/wp-admin/admin-ajax.php', data, function(response){

            var extraData = JSON.parse(response);

            $('div.field, div.road').each(function(){
                var cellSize = 90;
                $(this).css({'width' : parseFloat($(this).data('width')) * cellSize + 'px', 'height' : parseFloat($(this).data('height')) * cellSize + 'px', 'margin-top' : parseFloat($(this).data('margin-top')) * cellSize + 'px' , 'margin-left' : parseFloat($(this).data('margin-left')) * cellSize  /*Board*/ + 'px' });
               	
                if($(this).data('id')){
                    var landID = ((Number($(this).data('id')) < 100) ? ((Number($(this).data('id')) < 10) ? '00' : '0') : '') + $(this).data('id');
                    
                    if(landID.toString().indexOf('-') > 0){
                    	landID = landID.toString().split('-');
                    	landID[0] = ((landID[0].length < 3) ? ((landID[0].length < 2) ? '00' : '0') : '') + landID[0];
                    	landID = landID.join('-');
                    }
                    	
                    
					$(this).prepend('<span class="title">' + landID + '</span>' );
                    $(this).css({'cursor' : 'pointer'});                    
                    
                    if($(this).data('id') in extraData){
                        
                        $(this).children('span.title').html(extraData[$(this).data('id')]['street'] + ' - ' + landID);
                        
                        //$(this).children('span.field_data').before('<span class="extra_data extra_data_first"><strong>' + extraData[$(this).data('id')]['street'] + '</strong></span>');
                        if(extraData[$(this).data('id')]['size'])
                            $(this).children('span.title').append(' - ' + extraData[$(this).data('id')]['size']);
                        
                        if(extraData[$(this).data('id')]['registered'])
                            $(this).children('span.title').append(' - <span class="data_green">ЛК</span>');
                        else
                            $(this).children('span.title').append(' - <span class="data_red">ЛК</span>');
                        
                        if(extraData[$(this).data('id')]['electrified']){
                        	////console.log(extraData[$(this).data('id')]['electiricty_payed'], $(this).data('id'));
                        	if(extraData[$(this).data('id')]['electricity_payed'])
                            	$(this).children('span.field_data').before('<span class="extra_data data_electricity_payed data_green">Э</span>');
                        	else
                        		$(this).children('span.field_data').before('<span class="extra_data data_electricity_payed data_red">Э</span>');
                        }else
                            $(this).children('span.field_data').before('<span class="extra_data data_electricity_payed">&nbsp;</span>');

                        if(extraData[$(this).data('id')]['electrified']){
                            if(extraData[$(this).data('id')]['electric_meter'])
                                $(this).children('span.field_data').before('<span class="extra_data data_em data_green">НСч</span>');
                            else
                                $(this).children('span.field_data').before('<span class="extra_data data_em data_red">НСч</span>'); 
                        }else
                            $(this).children('span.field_data').before('<span class="extra_data data_em">&nbsp;</span>');
                        
                        //$(this).children('span.field_data').before('<span class="extra_data data_cp data_' + extraData[$(this).data('id')]['total_debt'] + ' break">Долг более ' + extraData['debt_limit'] + ' руб.</span>');
                        if(!extraData[$(this).data('id')]['total_debt'].length)
                        	$(this).children('span.field_data').before('<span class="extra_data data_cp data_' + extraData[$(this).data('id')]['total_debt'] + ' break">Долг менее ' + extraData['debt_limit'] + ' руб.</span>');
						else
							$(this).children('span.field_data').before('<span class="extra_data data_cp data_' + extraData[$(this).data('id')]['total_debt'] + ' break">Долг более ' + extraData['debt_limit'] + ' руб.</span>');
/*                        
                        if(extraData[$(this).data('id')]['communal_diff'][2016])
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_red break">ЧВ-16</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_green break">ЧВ-16</span>');

                        if(extraData[$(this).data('id')]['target_diff'][2016])
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_red">ЦВ-16</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_green">ЦВ-16</span>');  

                        if(extraData[$(this).data('id')]['communal_diff'][2017])
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_red break">ЧВ-17</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_green break">ЧВ-17</span>');

                        if(extraData[$(this).data('id')]['target_diff'][2017])
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_red">ЦВ-17</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_green">ЦВ-17</span>');
                            
                        if(extraData[$(this).data('id')]['communal_diff'][2018])
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_red break">ЧВ-18</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_green break">ЧВ-18</span>');

                        if(extraData[$(this).data('id')]['communal_diff'][2019])
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_red">ЧВ-19</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_green">ЧВ-19</span>');

/*                        if(extraData[$(this).data('id')]['target_diff'][2018])
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_red">ЦВ-18</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_green">ЦВ-18</span>');    
*/                                                    
/*
                            $(this).children('span.field_data').before('<span class="extra_data data_size">' + extraData[$(this).data('id')]['size'] + '</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_size"></span>');

                        if(extraData[$(this).data('id')]['electrified']){
                            if(extraData[$(this).data('id')]['electricity_payed'])
                                $(this).children('span.field_data').before('<span class="extra_data data_electricity_payed data_green">Э</span>');
                            else
                                $(this).children('span.field_data').before('<span class="extra_data data_electricity_payed data_red">Э</span>');
                        }else
                            $(this).children('span.field_data').before('<span class="extra_data data_electrified">&nbsp;</span>');
                        
                        if(extraData[$(this).data('id')]['registered'])
                            $(this).children('span.field_data').before('<span class="extra_data data_registered">ЛК</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_registered">&nbsp;</span>');
                            
                        if(extraData[$(this).data('id')]['communal_diff'])
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_red break">ЧВ-16</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_cp data_green break">ЧВ-16</span>');

                        if(extraData[$(this).data('id')]['target_diff'])
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_red">ЦВ-16</span>');
                        else
                            $(this).children('span.field_data').before('<span class="extra_data data_tp data_green">ЦВ-16</span>');  
                            
/*
                        if(!extraData[$(this).data('id')]['electrified'])
                            $(this).children('span.field_data').before('<span class="extra_data data_electricity_payed break">&nbsp;</span>');
                        else { 

                        }          */                                            
                        
  /*                      if(extraData[$(this).data('id')]['electrified']){
                            if(extraData[$(this).data('id')]['electric_meter'])
                                $(this).children('span.field_data').before('<span class="extra_data data_em data_green break">НСч</span>');
                            else
                                $(this).children('span.field_data').before('<span class="extra_data data_em data_red break">НСч</span>');  
                        } else
                            $(this).children('span.field_data').before('<span class="extra_data data_em break">&nbsp;</span>');                        
*/
                    }
                }                
            });

            $('.cp_map').height($(window).height());
            $('.cp_map').width($(window).width());
            $(window).on('resize', function(){
                $('.cp_map').height($(window).height());
                $('.cp_map').width($(window).width()); 
            });
            
            $('.loader').remove();
            $('.cp_map').show(400, function(){
                var mergeFields = [[162,163],[165,166],[144,143],[155,'156-1'],['156-2',140],[141,138],[126,125],[135,136],['137-1',124],[173,174],[175,176,171],[169,178],[111,110,109],[114,115],[189,190],[186,'185-2'],[191,'192-1'],['185-1',184],['192-2',193,194],[182,195],[100,99],[101,98],[96,95],[206,207],[208,209],[203,210],[202,201],[200,213],[199,198,216],[91,92],[225,226],[230,231],[84,79],[78,77,76],[245,246],[242,241],[250,251],[73,74],[70,69,68],[67,66,75],[65,64,63],[264,265],[262,261],[269,270],[257,256],[60,56],[276,275,274],[289,290],[47,48],[45,44],[49,43],[50,42],[296,297],[295,294],[298,299],[34,35],[30,29],[37,28],[309,308],[4,3],[15,14],[9,'8-2'],['8-1',7]];
                var defaultOffset = 3;
                
                mergeFields.forEach(function(fields){
                    fields.forEach(function(primaryField, primaryIndex){
                        fields.forEach(function(secondaryField){
                            if(primaryField == secondaryField)
                                return;

                            $('*[data-id="' + primaryField + '"]').addClass('merged_field');
                            $('*[data-id="' + secondaryField + '"]').addClass('merged_field');
                            
                            if($('*[data-id="' + primaryField + '"]').offset().left == $('*[data-id="' + secondaryField + '"]').offset().left){ // Vertical
                                var blockX = Math.abs($('*[data-id="' + primaryField + '"]').offset().left - ($('*[data-id="' + secondaryField + '"]').offset().left + $('*[data-id="' + secondaryField + '"]').width())) - 2 * defaultOffset;
                                var offsetX = $('*[data-id="' + primaryField + '"]').offset().left - parseInt($('.main_frame').css('margin-left')) + defaultOffset;
                            }else{ 
                                if($('*[data-id="' + primaryField + '"]').offset().left > $('*[data-id="' + secondaryField + '"]').offset().left){
                                    var offsetX = $('*[data-id="' + primaryField + '"]').offset().left - parseInt($('.main_frame').css('margin-left')) - defaultOffset;
                                }else{
                                    var offsetX = $('*[data-id="' + secondaryField + '"]').offset().left - parseInt($('.main_frame').css('margin-left')) - defaultOffset;
                                }
        
                                if($('*[data-id="' + primaryField + '"]').offset().top == $('*[data-id="' + secondaryField + '"]').offset().top){ // Horizontal                        
                                    var blockX = defaultOffset * 2; //2 x merged_field shadow
                                } else {
                                    if($('*[data-id="' + primaryField + '"]').offset().left > $('*[data-id="' + secondaryField + '"]').offset().left){
                                        var blockX = $('*[data-id="' + secondaryField + '"]').width() + $('*[data-id="' + secondaryField + '"]').offset().left - $('*[data-id="' + primaryField + '"]').offset().left;
                                    }else{
                                        var blockX = $('*[data-id="' + primaryField + '"]').width() + $('*[data-id="' + primaryField + '"]').offset().left - $('*[data-id="' + secondaryField + '"]').offset().left;
                                    }
                                    if(blockX <= 2 * defaultOffset)
                                        blockX = 2 * defaultOffset;                            
                                }
                            }
                            
                            if($('*[data-id="' + primaryField + '"]').offset().top == $('*[data-id="' + secondaryField + '"]').offset().top){ // Horizontal
                                if($('*[data-id="' + secondaryField + '"]').height() < $('*[data-id="' + primaryField + '"]').height())
                                    var blockY = $('*[data-id="' + secondaryField + '"]').height() - 2 * defaultOffset;
                                else
                                    var blockY = $('*[data-id="' + primaryField + '"]').height() - 2 * defaultOffset;
                                    
                                var offsetY = $('*[data-id="' + primaryField + '"]').offset().top + defaultOffset;
                            } else {
                                if($('*[data-id="' + primaryField + '"]').offset().top > $('*[data-id="' + secondaryField + '"]').offset().top){
                                    var offsetY = $('*[data-id="' + primaryField + '"]').offset().top - defaultOffset;
                                }else{
                                    var offsetY = $('*[data-id="' + secondaryField + '"]').offset().top - defaultOffset;
                                }
                            
                                if($('*[data-id="' + primaryField + '"]').offset().left == $('*[data-id="' + secondaryField + '"]').offset().left){ // Vertical
                                    var blockY = defaultOffset * 2; //2 x merged_field shadow
                                } else {
                                    offsetY = offsetY + 2 * defaultOffset;
                                    if($('*[data-id="' + primaryField + '"]').offset().top > $('*[data-id="' + secondaryField + '"]').offset().top){
                                        var blockY = $('*[data-id="' + secondaryField + '"]').height() + $('*[data-id="' + secondaryField + '"]').offset().top - $('*[data-id="' + primaryField + '"]').offset().top - 2 * defaultOffset;
                                    }else{
                                        var blockY = $('*[data-id="' + primaryField + '"]').height() + $('*[data-id="' + primaryField + '"]').offset().top - $('*[data-id="' + secondaryField + '"]').offset().top - 2 * defaultOffset;
                                    }
                                    if(blockY <= 2 * defaultOffset)
                                        blockY = 2 * defaultOffset;                            
                                }
                            }
        
                            $('head').append('<style>div.merged_' + primaryField + '-' + secondaryField + '{content: \'\';left: ' + offsetX + 'px;background-color: #efefef;width: ' + blockX + 'px;margin: 0;height: ' + blockY + 'px;top: ' + offsetY + 'px;padding: 0;display: block;position: absolute;z-index: 99;}</style>');
                            $('.main_frame').append('<div class="merged_' + primaryField + '-' + secondaryField + '"></div>');
                        });
                        fields.splice(primaryIndex, 1);
                    });
                });
                
                $('.merged_162-road').show();
                $('.road').first().addClass('merged_field');
            });
            
            $('.cp_legend').show();
            
            $('.cp_legend').offset({
                    left: parseInt($('.road').last().offset().left) + parseInt($('.road').last().width()) + 50, 
                    top: parseInt($('.road').last().position().top) - parseInt($('.cp_legend').outerHeight())
            });
        });            
    
        $('div.field, div.road').click(function(){
            if($(this).data('id')){
                var data = {
        			 'action': 'cp_ajax_info',
                     'id': $(this).data('id'),
                     'show' : 'html'
                };
                
            jQuery.post('/wp-admin/admin-ajax.php', data, function(response) {
                    var landID = ((Number(data['id']) < 100) ? ((Number(data['id']) < 10) ? '00' : '0') : '') + data['id'];
                    
                    if(landID.toString().indexOf('-') > 0){
                    	landID = landID.toString().split('-');
                    	landID[0] = ((landID[0].length < 3) ? ((landID[0].length < 2) ? '00' : '0') : '') + landID[0];
                    	landID = landID.join('-');
                    }                
				$('#cp_dialog').html(response);
                $("#cp_dialog" ).dialog({width: 950, height: 520, title: 'Участок ' + landID, position: { my: "center", at: "top+350px", of: window }});
      		}); 
            }
        });
    });
})(jQuery);