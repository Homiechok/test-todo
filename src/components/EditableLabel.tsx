import React, { type ChangeEvent, type KeyboardEvent, useState } from "react";

type EditableSpanPropsType = {
  label: string;
  onChange: (title: string) => void;
};

export const EditableLabel = React.memo((props: EditableSpanPropsType) => {
  const { label, onChange } = props;
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(label);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    if (!title.trim()) {
      setTitle(label);
      return label;
    }
    if (title.trim() !== label) {
      onChange(title.trim());
    } else setTitle(label);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") deactivateEditMode();
    if (e.key === "Escape") {
      setTitle(label);
      setEditMode(false);
    }
  };

  return (
    <div className="flex-1 min-w-0 h-8 flex items-center">
      {editMode ? (
        <input
          value={title}
          onBlur={deactivateEditMode}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          autoFocus
          className="w-full h-8 px-2 border rounded box-border leading-8 focus:outline-none"
        />
      ) : (
        <label
          onDoubleClick={activateEditMode}
          className="w-full block px-2 truncate leading-8 cursor-text select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
});
