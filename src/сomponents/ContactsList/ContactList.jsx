import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class ContactList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  componentWillUnmount() {
    localStorage.removeItem("contacts");
  }

  render() {
    const { list, handleRemove } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {list.map((contact) => {
          const id = uniqid();
          return (
            <CSSTransition key={id} timeout={500} classNames={styles.item}>
              <li className={styles.listItem}>
                <span className={styles.info}>{contact.name}:</span>
                <span className={styles.info}>{contact.number}</span>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => {
                    handleRemove(contact.id);
                  }}
                >
                  Удалить
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}
// const ContactList = ({ list, handleRemove }) => {
//   componentWil
//   return (
//     <ul className={styles.list}>
//       {list.map(contact => {
//         const id = uniqid();
//         return (
//           <li key={id} className={styles.listItem}>
//             <span className={styles.info}>{contact.name}:</span>
//             <span className={styles.info}>{contact.number}</span>
//             <button
//               className={styles.button}
//               type="button"
//               onClick={() => {
//                 handleRemove(contact.id);
//               }}>
//               Удалить
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   list: PropTypes.array.isRequired,
// };

// export default ContactList;
