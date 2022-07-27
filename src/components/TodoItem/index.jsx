/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';
import RenderTip from '../RenderTip';
// TODO
import style from './TodoItem.module.scss';

type TodoItemProps = {
  id: string,
  done: boolean,
  text: string,
  onToggleItem: (id: string) => void,
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, text, done, onToggleItem, onDeleteTodo } = props;

  const atClick = () => {
    onToggleItem(id);
  };
  const atDelete = () => {
    onDeleteTodo(id);
  };

  return (
    <section data-name="TodoItem" data-gradient className="style-3">
      <RenderTip />
      <div data-active={done} className={style.todoItem} onClick={atClick}>
        {text}
      </div>
      {/* FIXME delete not working */}
      <button className={cx('btn btn-danger')} onClick={atDelete}>
        Delete
      </button>
    </section>
  );
};

export default TodoItem;
