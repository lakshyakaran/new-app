import { useState } from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
  IDragDropEvents,
  IDragDropContext,
  IColumnReorderOptions,
  IGroup,
} from 'office-ui-fabric-react/lib/DetailsList';
import { getTheme, mergeStyles } from 'office-ui-fabric-react/lib/Styling';


const data = [
    {
        action: "action1",
        id: "1.343",
        description: "Lorem ipsum dolor sit amet,",
        reviewFrom: "20-05-2020",
        appraisalTo: "20-05-2020",
        owner: "20-05-2020",
        reviewFrequency: "20-05-2020",
      },
      {
        action: "action2",
        id: "1.343",
        description: "Lorem ipsum dolor sit amet,",
        reviewFrom: "20-05-2020",
        appraisalTo: "20-05-2020",
        owner: "20-05-2020",
        reviewFrequency: "20-05-2020",
      },
      {
        action: "action3",
        id: "1.343",
        description: "Lorem ipsum dolor sit amet,",
        reviewFrom: "20-05-2020",
        appraisalTo: "20-05-2020",
        owner: "20-05-2020",
        reviewFrequency: "20-05-2020",
      },
      {
        action: "action4",
        id: "1.343",
        description: "Lorem ipsum dolor sit amet,",
        reviewFrom: "20-05-2020",
        appraisalTo: "20-05-2020",
        owner: "20-05-2020",
        reviewFrequency: "20-05-2020",
      },
];

export default function Table(){
    const theme = getTheme();
    const [tableData, setTableData] = useState(data)
    const [isColumnReorderEnabled, setIsColumnReorderEnabled] = useState(true)
    const [frozenColumnCountFromStart] = useState("1")
    const [frozenColumnCountFromEnd] = useState("0");
    const _dragDropEvents = _getDragDropEvents();
    let _draggedItem : any = [];
    let _draggedIndex : number = -1;
    let _selection :Selection = new Selection();
    
    const dragEnterClass = mergeStyles({
        backgroundColor: "#FFFF00",
        border: "1px dotted"
    });
    const columns: IColumn[] = [
        // {
        //   key: "01",
        //   name: "S.No.",
        //   fieldName: "sno",
        //   minWidth: 10,
        //   maxWidth: 70,
        // },
        {
          key: "02",
          name: "Action",
          fieldName: "action",
          minWidth: 10,
          maxWidth: 150,
        },
        {
          key: "03",
          name: "Id",
          fieldName: "id",
          minWidth: 10,
          maxWidth: 150,
          isSorted:true,
          onColumnClick:handleSorting
        //   isSortedDescending: false,
        //   sortDescendingAriaLabel: "Sorted Z to A",
        //   isResizable: false,
        },
        {
          key: "04",
          name: "Description",
          fieldName: "description",
          minWidth: 10,
          maxWidth: 250,
          isSorted:true,
          onColumnClick:handleSorting
        },
        {
          key: "05",
          name: "Review From",
          fieldName: "reviewFrom",
          minWidth: 10,
          maxWidth: 150,
        },
        {
          key: "06",
          name: "Appraisal To",
          fieldName: "appraisalTo",
          minWidth: 10,
          maxWidth: 150,
        },
        {
          key: "07",
          name: "Owner",
          fieldName: "owner",
          minWidth: 10,
          maxWidth: 200,
        },
        {
          key: "08",
          name: "Review Frequency",
          fieldName: "reviewFrequency",
          minWidth: 10,
          maxWidth: 100,
        },
    ];
    
    const group :IGroup[] = [
      { key: 'groupred0', name: "Select", startIndex: 0, count: 4, level: 0 },
      { key: 'groupblue2', name: 'Select', startIndex: 2, count: 4, level: 0 }
    ];

    function handleSorting( 
        ev?: React.MouseEvent<HTMLElement>,
        column?: IColumn
    ){
        console.log("Column clicked =>", column?.key)
    }

    //   for(let i = 0; i<tableData.length;i++){
    //       group.push({
    //         key: i.toString(),
    //         name: i.toString(),
    //         startIndex: i * tableData.length,
    //         count: 2,
    //         level: 0
    //       })
    //   }

    //   function _getColumnReorderOptions(): IColumnReorderOptions {
    //     return {
    //       frozenColumnCountFromStart: parseInt(frozenColumnCountFromStart, 10),
    //       frozenColumnCountFromEnd: parseInt(frozenColumnCountFromEnd, 10),
    //       handleColumnReorder: _handleColumnReorder,
    //     };
    //   }

    //   let _handleColumnReorder = (draggedIndex: number, targetIndex: number) => {
    //       console.log("RE order==>",draggedIndex)
    //     // const draggedItems = this.state.columns[draggedIndex];
    //     // const newColumns: IColumn[] = [...this.state.columns];
    
    //     // // insert before the dropped item
    //     // newColumns.splice(draggedIndex, 1);
    //     // newColumns.splice(targetIndex, 0, draggedItems);
    //     // this.setState({ columns: newColumns });
    //   };
    function _insertBeforeItem(item:any): void {
        const draggedItems = _selection.isIndexSelected(_draggedIndex)
        ? (_selection.getSelection())
        : [_draggedItem!];
        
        const insertIndex = tableData.indexOf(item);
        const items = tableData.filter(itm => draggedItems.indexOf(itm) === -1);
      items.splice(insertIndex, 0, ...draggedItems);
  
      setTableData(items);
    }
    
    function _getDragDropEvents(): IDragDropEvents {
      return {
        canDrop: (dropContext?: IDragDropContext, dragContext?: IDragDropContext) => {
          return true;
        },
        canDrag: (item?: any) => {
          return true;
        },
        onDragEnter: (item?: any, event?: DragEvent) => {
          // return string is the css classes that will be added to the entering element.
          return dragEnterClass;
        },
        onDragLeave: (item?: any, event?: DragEvent) => {
          return;
      },
      onDrop: (item?: any, event?: DragEvent) => {
          if (_draggedItem) {
            _insertBeforeItem(item);
          }
        },
        onDragStart: (item?: any, itemIndex?: number, selectedItems?: any[], event?: MouseEvent) => {
          _draggedItem = item;
          _draggedIndex = itemIndex!;
        },
        onDragEnd: (item?: any, event?: DragEvent) => {
          _draggedItem = undefined;
          _draggedIndex = -1;
        },
      };
    }


    return(
        <div>
            <DetailsList
              items={tableData}
              columns={columns}
            //   groups={group}
              selectionMode={SelectionMode.multiple}
              setKey="multiple"
              dragDropEvents={_dragDropEvents}
              layoutMode={DetailsListLayoutMode.justified}
              isHeaderVisible={true}
              selectionPreservedOnEmptyClick={true}
            />
        </div>
    )
}