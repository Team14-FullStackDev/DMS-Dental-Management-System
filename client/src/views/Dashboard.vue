<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
              <div class="col">
                <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Welcome Back, Dr. </h6>
                                <h5 class="h3 text-white mb-0">APPOINTMENTS STATISTICS</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Month</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Week</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                    </div>
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                  <div class="col-xl-3">
                    <div class="card mb-4 mb-xl-0">
                      <div class="card-body">
                        <h3 class="card-title">Card title</h3>
                        <div class="row custom-center">
                          <div class="col" >
                              <p style="text-align: center;font-size:60px;">5</p>
                          </div>
                          <div class="col ">
                              <div class="row pt-3 mb-2" style="background:#F2F5FA">
                                <div class="col">
                                  <p style=";font-size:10px">Consultation</p>
                                </div>
                                <div class="col">
                                  <p style=";font-size:10px">9:00 - 10:00</p>
                                </div>
                              </div>
                              <div class="row pt-3 mb-2" style="background:#F2F5FA">
                                <div class="col">
                                  <p style=";font-size:10px">Open Access</p>
                                </div>
                                <div class="col">
                                  <p style=";font-size:10px">11:00 - 12:00</p>
                                </div>
                              </div>
                              <div class="row pt-3 mb-2" style="background:#F2F5FA">
                                <div class="col">
                                  <p style=";font-size:10px">Scaling</p>
                                </div>
                                <div class="col">
                                  <p style=";font-size:10px">13:00 - 15:00</p>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card mb-4 mb-xl-0">
                      <div class="card-body mb-1">
                        <h3 class="card-title">TOP TREATMENT</h3>
                        <div style="font-size:10px">
                          <p>1. Consultation</p>
                          <p>2. Scaling</p>
                          <p>3. Root Canal</p>
                          <p>4. Bleaching</p>
                          <p>5. Wisdom Teeth Removal</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card mb-4 mb-xl-0">
                      <div class="card-body mb-2">
                        <h3 class="card-title">TOP PATIENTS THIS MON</h3>
                        <p style="font-size:40px">10</p>
                        <h3 class="card-title">TOP PATIENTS ALL TIME</h3>
                        <p style="font-size:40px">10</p>
                      </div>
                    </div>
                </div>

                <div class="col-xl-3">
                    <div class="card mb-4 mb-xl-0">
                      <div class="card-body mb-2">
                        <h3 class="card-title">TOTAL INCOME</h3>
                        <p style="font-size:30px">$23,000</p>
                        <h5 class="card-title">This Month So Far</h5>
                        <p style="font-size:30px">$35,000</p>
                        <h5 class="card-title">Previous Month</h5>
                      </div>
                    </div>

                </div>
            </div>
            <!-- End charts-->
        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';

  export default {
    components: {
      LineChart,
    
    },
    data() {
      return {
        bigLineChart: {
          allData1: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          allData2: [
            [10, 20, 10, 30, 15, 40, 20, 10, 80],
            [0, 20, 5, 25, 10, 30, 15, 40, 10]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.lineChartOptionsBlue,
        },
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Appointments',
              data: this.bigLineChart.allData1[index],
              backgroundColor:'rgba(54, 162, 235, 0.2)',
              borderColor:'rgba(54, 162, 235, 1)'
            },
            {
              label: 'Cancel',
              data: this.bigLineChart.allData2[index],
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor:'rgba(255,99,132,1)'
            }
          ],
          labels: ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.custom-center{
    display: flex;
    align-items: center;
}
</style>
