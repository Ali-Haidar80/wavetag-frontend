"use client"
import React, { useState, useRef, useCallback, RefObject } from 'react';
import "./editor.css";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "quill-emoji/dist/quill-emoji.css";
import Image from 'next/image';
import DropDown from './Dropdown';
import 'quill-mention/dist/quill.mention.css';
require("quill-mention")

// Add custom font sizes in editor
const fontSizeArr = ['12px', '18px', '24px', '36px',];
var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

// Add ColorsClass
const ColorClass = Quill.import('attributors/class/color');
Quill.register(ColorClass, true);

// Add Custom Colors in Editor 
const ColorStyle = Quill.import('attributors/style/color');
let Colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFA500", "#800080", "#008080", "#FFC0CB", "#4B0082", "#A52A2A", "#00FFFF", "#FFD700"]
ColorStyle.whitelist = Colors;
Quill.register(ColorStyle, true);

// Add Emoji in Editor add icon as well
const Emoji = require("quill-emoji");
Emoji.default.ToolbarEmoji.DEFAULTS.buttonIcon = `<img src="/assets/svgs/emoji.svg" alt=''/>`
Quill.register("modules/emoji", Emoji);

// Add Font fammily in Editor 
var FontAttributor = Quill.import('formats/font');
var fonts = ['impact', 'courier', 'comic'];
FontAttributor.whitelist = fonts;
Quill.register(FontAttributor, true);

// Add Custom icons in Editor 
var icons = Quill.import('ui/icons');
icons['bold'] = `<img src="/assets/svgs/bold.svg" alt=''/>`
icons['italic'] = `<img src="/assets/svgs/italic.svg" alt=''/>`
icons['underline'] = `<img class="w-[0.7rem] " src="/assets/svgs/underline.svg" alt=''/>`
icons['strike'] = `<img  src="/assets/svgs/delS.svg" alt=''/>`
icons['align']['center'] = `<img class="w-[1rem]" src="/assets/svgs/center.svg" alt=''/>`
icons['align'][''] = `<img class="w-[1rem]" src="/assets/svgs/leftalign.svg" alt=''/>`
icons['align']['right'] = `<img class="w-[1rem]" src="/assets/svgs/rightalign.svg" alt=''/>`
icons['list']['ordered'] = `<img src="/assets/svgs/right.svg" alt=''/>`
icons['link'] = `<img src="/assets/svgs/link.svg" alt=''/>`
icons['image'] = `<img src="/assets/svgs/img.svg" alt=''/>`
icons["undo"] = `<img src="/assets/svgs/undo.svg" alt=''/>`;
icons["redo"] = `<img src="/assets/svgs/redo.svg" alt=''/>`;
icons["A"] = `<img class="w-[1rem]" src="/assets/svgs/a.svg" alt=''/>`;
icons['direction'][''] = `<img src="/assets/svgs/direction.svg" alt=''/>`
icons['plusbar'] = `<img src="/assets/svgs/plusbar.svg" alt=''/>`
icons['bar'] = `<img src="/assets/svgs/bar.svg" alt=''/>`


const EditorConvertToHTML = () => {
  let editorRef: any = useRef();

  const [undoLength, setUndoLength] = useState(0);
  const [redoLength, setRedoLength] = useState(0);

  const onEditorStateChange = () => {
    let myEditor = editorRef.current.getEditor();
    setUndoLength(myEditor.history.stack.undo.length);
    setRedoLength(myEditor.history.stack.redo.length);
  };

  const myUndo = () => {
    let myEditor = editorRef.current.getEditor();
    setUndoLength(myEditor.history.stack.undo.length);
    return myEditor.history.undo();
  };

  const myRedo = () => {
    let myEditor = editorRef.current.getEditor();
    setRedoLength(myEditor.history.stack.redo.length);
    return myEditor.history.redo();
  };
  const [isOpened, setIsOpened] = useState(false)

  // Mentions Array of users
  const usersList = [{ id: 1, value: 'ziyan' }, { id: 2, value: 'hamza' }];
  // Defaults Hastags Array
  const tagList = [{ id: 1, value: 'marketing' }, { id: 2, value: 'gaming' }];

  return (
    <div className='w-[100%]'>
      <CustomToolbar setIsOpened={setIsOpened} isOpened={isOpened} undoLength={undoLength} redoLength={redoLength} onUndo={myUndo} onRedo={myRedo} />
      <SubComp isOpened={isOpened} editorRef={editorRef} />
      <ReactQuill
        ref={editorRef}

        theme="snow" modules={{
          "emoji-toolbar": true,
          "emoji-textarea": true,
          "emoji-shortname": true,
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
            mentionDenotationChars: ['@', '#'],
            source: useCallback(
              async (
                searchTerm: string,
                renderItem: (arg0: { id: number; value: string }[] | undefined, arg1: any) => void,
                mentionChar: string,
              ) => {
                let values;

                if (mentionChar === '@') {
                  values = usersList;
                } else {
                  values = tagList;
                }

                if (searchTerm.length === 0) {
                  renderItem(values, searchTerm);
                } else if (values) {
                  const matches = usersList?.filter((item: { id: number, value: string }) =>
                    item.value.toLowerCase().includes(searchTerm.toLowerCase()),
                  );
                  renderItem(matches, searchTerm);
                }
              },
              [],
            ),
          },
          toolbar: {
            container: '#toolbar',  // Selector for toolbar container
          }
        }} onChange={onEditorStateChange} />
    </div>
  );
};

export default EditorConvertToHTML;


interface CustomToolbarProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  undoLength: number;
  redoLength: number;
  onUndo: () => void;
  onRedo: () => void;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ isOpened, setIsOpened, undoLength, redoLength, onUndo, onRedo }) => {
  const undoOpacity = undoLength === 0 ? 0.5 : 1;
  const redoOpacity = redoLength === 0 ? 0.5 : 1;
  const [isOpenedBar, setIsOpenedBar] = useState(false)
  return (
    <div id="toolbar" className=''>
      <div className='flex justify-between w-full'>
        <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col xs:flex-col ">
          <div className="flex gap-1">
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-bold"></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-italic"></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-underline ql-active"></button>
            <button className={`!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-A ${isOpened && '!bg-secondary-150'}`} onClick={() => setIsOpened(!isOpened)}></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-align" value={''}></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-align" value={'center'}></button>
            <button className="!pb-6 !w-[40px] !pr-3 !pt-3 rounded-t-md ql-align" value={'right'}></button>
          </div>
          <div className="flex gap-1">
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-list" value={'ordered'}></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-direction" value={'rtl'}></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-link"></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-image"></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-emoji"></button>
            <button className="!pb-6 !w-[40px]  !pt-3 rounded-t-md ql-plusbar"></button>
          </div>
        </div>
        <div className="flex gap-2 lg:items-center xl:items-center 2xl:items-center md:items-end sm:items-end xs:items-end">
          <button className={`ql-undo`} onClick={onUndo} disabled={undoLength === 0} style={{ opacity: undoOpacity }}></button>
          <button className="ql-redo" onClick={onRedo} disabled={undoLength === 0} style={{ opacity: redoOpacity }}></button>
          <button className="ql-bar relative" onClick={() => setIsOpenedBar(!isOpenedBar)}>
            {isOpenedBar && (
              <div className="p-2 rounded-md absolute -left-10 top-8 z-20 bg-secondary-100">
                Export
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
};

interface SubCompProps {
  isOpened: boolean;
  editorRef: RefObject<any>; // Update the type according to the type of your editorRef
}

const SubComp: React.FC<SubCompProps> = ({ isOpened, editorRef }) => {
  const HandlerStrike = (type: string) => {
    const quill = editorRef.current.getEditor();
    const currentFormat = quill.getFormat(); // Get the current formats
    console.log(currentFormat)
    const isStrike = currentFormat[type]; // Check if 'strike' format is currently applied
    quill.format(type, !isStrike);
  };

  const handlerToggleArg = (formatType: string, value1: string, value2: string) => {
    const quill = editorRef.current.getEditor();
    const currentFormat = quill.getFormat();
    const currentValue = currentFormat[formatType];
    console.log(currentValue)
    const newValue = currentValue === value1 ? value2 : value1;

    quill.format(formatType, newValue);
  };


  const onChange = (option: string) => {
    const quill = editorRef.current.getEditor();
    console.log(quill, 'quill')
    if (option == 'Small') {
      quill.format('size', '12px');
    } else if (option == 'Regular') {
      quill.format('size', '18px');
    } else if (option == 'Large') {
      quill.format('size', '24px');
    } else {
      quill.format('size', '36px');
    }
  }
  const onChange1 = (option: string) => {
    const quill = editorRef.current.getEditor();
    if (option == 'Impact') {
      quill.format('font', 'impact');
    } else if (option == 'Courier') {
      quill.format('font', 'courier');
    } else {
      quill.format('font', 'comic');
    }
  }
  const options = ['Small', 'Regular', 'Large', 'Huge'];
  const options1 = ['Impact', 'Courier', 'Comic'];
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const handlerOpened2 = () => {
    setIsOpen2(!isOpen2)
    setIsOpen1(false)
    setIsOpen5(false)

  }
  const handlerOpened1 = () => {
    setIsOpen1(!isOpen1)
    setIsOpen2(false)
    setIsOpen5(false)

  }
  const handlerOpened5 = () => {
    setIsOpen5(!isOpen5)
    setIsOpen1(false)
    setIsOpen2(false)

  }
  const onChange5 = (color: string) => {
    const quill = editorRef.current.getEditor();
    // quill.formatText(quill.selection.savedRange.index, quill.selection.savedRange.length, 'color', color);
    quill.format('color', color);

  }
  const onChange2 = () => {
    const quill = editorRef.current.getEditor();
    const cursorPosition = quill.getSelection().index;
    quill.insertText(cursorPosition, "@");
    quill.setSelection(cursorPosition + 1);
  }
  const onChange3 = () => {
    const quill = editorRef.current.getEditor();
    const cursorPosition = quill.getSelection().index;
    quill.insertText(cursorPosition, "#");
    quill.setSelection(cursorPosition + 1);
  }
  return (
    <>
      {isOpened && (
        <div className="flex items-center gap-2 py-3 px-2 bg-secondary-150">
          <button className="px-2  ql-strike" onClick={() => HandlerStrike('strike')}>
            <img src="/assets/svgs/delS.svg" alt='' />
          </button>
          <button className="px-2  ql-script" onClick={() => handlerToggleArg('script', 'sub', '')}>
            <img src="/assets/svgs/sub.svg" alt='' />
          </button>
          <button className="px-2  ql-script" onClick={() => handlerToggleArg('script', 'super', '')}>
            <img src="/assets/svgs/sup.svg" alt='' />
          </button>

          <DropDown
            options={options}
            icon="/assets/svgs/fontsize.svg"
            width={20}
            height={20}
            onChange={onChange}
            isOpen={isOpen1}
            setIsOpen={handlerOpened1}
          />
          <DropDown
            options={options1}
            icon="/assets/svgs/Aim.svg"
            width={12}
            height={12}
            onChange={onChange1}
            isOpen={isOpen2}
            setIsOpen={handlerOpened2}
          />
          <DropDownColor onChange={onChange5} isOpen={isOpen5} setIsOpen={handlerOpened5} icon={'/assets/svgs/edit.svg'} options={Colors} width={15} height={15} />
          <button className="px-2  ql-color" onClick={onChange2}>
            <img src="/assets/svgs/hightlight.svg" alt='' />
          </button>
          <button className="px-2  ql-color" onClick={onChange3}>
            <img src="/assets/svgs/star.svg" alt='' />
          </button>
          <button className="px-2  ql-color" >
            <img src="/assets/svgs/Across.svg" alt='' />
          </button>
        </div>
      )}
    </>
  )
}


const DropDownColor = ({ onChange, isOpen, setIsOpen, icon, options, width, height }: any) => {

  return (
    <div className="relative  flex justify-center items-center text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="z-20 inline-flex justify-between w-full px-4 text-sm font-medium text-gray-700   rounded-md focus:outline-none items-center "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <Image src={icon} width={width} height={height} alt='' />
      </button>
      {isOpen && (
        <div
          className="top-[20px] p-[3px] w-[150px] origin-top-right z-20 absolute right-[-10px] mt-2 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 flex gap-1 flex-wrap" role="none">
            {options.map((option: string) => (
              <div
                key={option}
                onClick={() => (setIsOpen(false), onChange(option))}
                style={{ backgroundColor: option }}
                className="w-3 h-4 block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-100  hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
