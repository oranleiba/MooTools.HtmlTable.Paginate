HtmlTable.Paginate
==================

Adds a pagination control to a HtmlTable

How to use
----------

This interface refactors HtmlTable and adds a pagination control to the table's header as the first row. 

options.listenToPush:false - is an important options as it flags whether to update the pagination on the table's content update / push

				when set to false you have to call manually to updatePagination().

Demo folder is part of the package.

Inline comments are available in the javascript file.