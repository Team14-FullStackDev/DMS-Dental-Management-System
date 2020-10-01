<template>
    <div>
        <base-header type="gradient-success" class="bg-gradient-info pb-2 pt-3 pt-md-6">
        </base-header>
        <div class="container-fluid mt-1">
            <div class="row justify-content-center">
                <div class="col-md">
                    <div class="card">
                        <div class="card-body">
                             <FullCalendar 
                                :options="calendarOptions"
                                :selectable="true"
                                :editable="true"
                                :events="EVENTS"
                                @select="handleSelect"
                                @eventClick="handleEventClick"
                                @eventResize="updateEvent"
                                @eventDrop="updateEvent"
                                @eventRender="renderEvent"
                            />
                            <modals-container />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import EventModal from '../components/EventModal'
import CommentsModal from '../components/CommentModal'
import Modal from '../components/Modal'
import {mapGetters} from 'vuex'
export default {
    components: {
    FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
            plugins: [ dayGridPlugin, interactionPlugin ],
            initialView: 'dayGridMonth',
            }
        }
    },
    computed: {
        ...mapGetters(["EVENTS"])
    },
    methods: {
        newEvent() {
            this.$modal.show(Modal, {
                text: "TExt", 
            })
            
        },
        renderEvent(arg) {
            let span = document.createElement('span')
            span.setAttribute('class', 'fa fa-comments')
            arg.el.appendChild(span)
            span.addEventListener('click', event => {
                event.stopPropagation(); 
                this.$modal.show(CommentsModal, {
                    text: "This is for the comments"
                })
            })
        },
        updateEvent (arg) {
            this.$store.commit("UPDATE_EVENT", arg.event)
        },
        handleSelect(arg) {
            this.$store.commit("ADD_EVENT", {
                id: (new Date()).getTime(),
                title: "Something",
                start: arg.start,
                end: arg.end,
                allDay: arg.allDay
            })
        },
        handleEventClick (arg) {
            console.log(arg)
            this.$modal.show(EventModal, {
                text: "This is from the component",
                event: arg.event
            })
        }
    }
}
</script>
<style>
</style>